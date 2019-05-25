import React, { PureComponent, createRef } from "react";
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
	}

	componentWillUnmount() {
		this.map.remove();
	}

	initializeMap = centerCoords => {
		this.map = new mapboxgl.Map({
			container: this.mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v9",
			center: centerCoords,
			zoom: 15,
		});
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
