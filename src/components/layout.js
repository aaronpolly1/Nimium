/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "../Styles/App.css";
import "../Styles/Mobile.css";
import "../Styles/Tablet.css"
import "../Styles/Retina.css"
import "../Styles/Hamburger.css"
import "../components/UseCaseCard/UseCaseCard.css"
import "../components/TimeLineItem/timeLineItem.css"
import React from "react"
import PropTypes from "prop-types"




const Layout = ({ children }) => {



  return (
    <>
        <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
