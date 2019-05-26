import React, { PureComponent, createRef } from "react";
import ReactDOMServer from "react-dom/server";
import { InteractiveSVGIcon } from "../../../../components";
import iconPoint from "../../../../assets/images/pictures/BackgroundForMap/img/map-pointer.png";
import isEqual from "lodash/isEqual";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import "./MapBox.css";

const DEFAULT_CONSTANTS = [30.2656504, 59.8029126];

export class MapBox extends PureComponent {
	map = null;
	mapContainer = createRef();

	componentDidMount() {
		mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

		this.initializeMap(DEFAULT_CONSTANTS);
		this.map.on("load", () => {
			this.addTheCustomPoint(DEFAULT_CONSTANTS, "pointer");
		});
	}

	componentWillUnmount() {
		this.map.remove();
	}

	initializeMap = centerCoords => {
		this.map = new mapboxgl.Map({
			container: this.mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v9",
			center: centerCoords,
			zoom: 11,
		});
	};

	testClick = () => alert("check");

	addTheCustomPoint = (centerCoords, iconName) => {
		const pointerWrapper = document.createElement("div");
		pointerWrapper.classList.add("pointer-wrapper");

		const pointerContainer = document.createElement("div");
		const pointerIcon = ReactDOMServer.renderToStaticMarkup(<InteractiveSVGIcon icon={iconName} />);
		pointerContainer.innerHTML = pointerIcon;

		pointerWrapper.appendChild(pointerContainer);
		pointerContainer.addEventListener("click", this.testClick);

		new mapboxgl.Marker(pointerWrapper).setLngLat(centerCoords).addTo(this.map);
	};

	removeLayer = () => {
		const { map } = this;

		if (map) {
			if (map.getLayer("route")) {
				console.log("test1");
				map.removeLayer("route");
			}

			if (map.getSource("route")) {
				console.log("test2");
				map.removeSource("route");
			}
		}
	};

	render() {
		return <div ref={this.mapContainer} className="map-container" />;
	}
}
