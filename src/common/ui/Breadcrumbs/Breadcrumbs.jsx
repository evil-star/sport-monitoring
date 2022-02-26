import PropTypes from "prop-types";
import {Breadcrumbs as BreadcrumbsMui, Link, Skeleton, Typography} from "@mui/material";
import React from "react";
import {NavLink} from "react-router-dom";

const Breadcrumbs = ({crumbs = []}) => {
  return (
    <BreadcrumbsMui aria-label="breadcrumb">
      {crumbs.map((c, index) =>
        c.isLoading ? (
          <Skeleton sx={{width: "100px"}} key={c.href} />
        ) : crumbs.length - 1 === index ? (
          <Typography color="text.primary" key={c.href}>
            {c.name}
          </Typography>
        ) : (
          <Link
            key={c.href}
            underline="hover"
            color="inherit"
            component={NavLink}
            to={c.href}
          >
            {c.name}
          </Link>
        )
      )}
    </BreadcrumbsMui>
  );
};

Breadcrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string.isRequired,
      isLoading: PropTypes.bool,
    })
  ).isRequired,
};

export default Breadcrumbs;
