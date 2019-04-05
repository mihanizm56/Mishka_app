// @flow
import React, { memo } from "react";
import MainLayout from "../../../../routes/";
import { Footer, Header } from "../";
import "./MainWrapper.css";

import { FormAuth } from '../'
import { Portal } from '../../../../containers';

export const MainWrapper = memo(props => {
	const { router, userIsLoggedIn, ...restProps } = props;
	//console.log(props);
	//console.log(router);
	return (
		<div className="main-wrapper">
			<Header route={router} />
			<MainLayout {...restProps} />
			<Footer />

			{!userIsLoggedIn &&
				<Portal>
					<FormAuth />
				</Portal>
			}
		</div>
	);
});
