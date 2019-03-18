// @flow
import React, {Component} from "react";
import MediaQuery from "react-responsive";
import { BigHeader, MidHeader, SmallHeader } from "./headers";
import {
	BIG_MEDIA_SIZE,
	MIDDLE_MEDIA_SIZE_FROM,
	MIDDLE_MEDIA_SIZE_TO,
	SMALL_MEDIA_SIZE_FROM,
	SMALL_MEDIA_SIZE_TO,
} from "../../../constants";
import {
	ERROR_PAGE_NAME,
	EMPTY_PAGE,
	CATALOG_PAGE,
	INDEX_PAGE,
	ORDER_PAGE,
	CATALOG_PAGE_NAME,
	INDEX_PAGE_NAME,
	ORDER_PAGE_NAME
} from './constants'

type HeaderPropType = {
	pageName: string,
};

export class Header extends Component<HeaderPropType>{
	static defaultProps = {
		pageName: "catalog-page",
	}
	
	static getDerivedStateFromProps(props, state) {
		const {route} = props;
		const pageHash = route.location.pathname;
		return {...state, pageHash: pageHash}
	}

	constructor(){
		super()
		this.state = {
			pageHash:'/'
		}
	}

	getPageName = (pageHash:string) => {
		console.log('test pageHash in getPageName = ',pageHash)
		if(pageHash === INDEX_PAGE || pageHash === EMPTY_PAGE) {
			return INDEX_PAGE_NAME
		} 
		if(pageHash === CATALOG_PAGE) {
			return CATALOG_PAGE_NAME
		} 
		if(pageHash === ORDER_PAGE) {
			return ORDER_PAGE_NAME
		}
	
		return ERROR_PAGE_NAME
	}

	render(){
		const {pageHash} = this.state;
		console.log('pageHash = ',pageHash)
		console.log('pageName = ',this.getPageName(pageHash))
		return (
			<div className="header-wrapper">
				<MediaQuery minWidth={BIG_MEDIA_SIZE}>
					<BigHeader page={this.getPageName(pageHash)}/>
				</MediaQuery>
				<MediaQuery minWidth={MIDDLE_MEDIA_SIZE_FROM} maxWidth={MIDDLE_MEDIA_SIZE_TO}>
					<MidHeader page={this.getPageName(pageHash)}/>
				</MediaQuery>
				<MediaQuery minWidth={SMALL_MEDIA_SIZE_FROM} maxWidth={SMALL_MEDIA_SIZE_TO}>
					<SmallHeader page={this.getPageName(pageHash)}/>
				</MediaQuery>
			</div>
		);
	}
}