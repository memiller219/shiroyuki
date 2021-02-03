import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import "./directory.styles.scss";

const Directory = ({ sections }) => {
  // state contains all of the imageURLs, titles, and id's for the directory

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => {
        return <MenuItem key={id} {...sectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
