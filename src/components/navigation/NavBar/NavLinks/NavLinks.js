import React from 'react';
import { connect } from 'react-redux';
import MdHome from 'react-icons/md/home';
import FaGraduationCap from 'react-icons/fa/graduation-cap';
import FaBlackTie from 'react-icons/fa/black-tie';
import FaCode from 'react-icons/fa/code';
import MdWork from 'react-icons/md/work';
import FaInfoCircle from 'react-icons/fa/info-circle';
import FaHeart from 'react-icons/fa/heart';
import FaThumbsOUp from 'react-icons/fa/thumbs-o-up';
import Scrollchor from 'react-scrollchor';
import { setNavBarHover } from '../../../../actions/NavBarActions';
import './NavLinks.scss';

class NavLinks extends React.Component {
  handleClick = () => {
    setTimeout(() => { this.props.setHover(false); }, 650);
  }
  handleHoverTrue = () => {
    this.props.setHover(true);
  }
  render() {
    return (
      <div className="NavLinks">
        <ul>
          <li onMouseEnter={this.handleHoverTrue}>
            <Scrollchor to="#root" animate={{ offset: -45, duration: 800 }} beforeAnimate={this.handleClick}>
              <MdHome />
              <span>Top of Page</span>
            </Scrollchor>
          </li>
          <li onMouseEnter={this.handleHoverTrue}>
            <Scrollchor to="#About" animate={{ offset: -45, duration: 800 }} beforeAnimate={this.handleClick}>
              <FaInfoCircle />
              <span>About Me</span>
            </Scrollchor>
          </li>
          <li onMouseEnter={this.handleHoverTrue}>
            <Scrollchor to="#Skills" animate={{ offset: -45, duration: 800 }} beforeAnimate={this.handleClick}>
              <FaCode />
              <span>Skills</span>
            </Scrollchor>
          </li>
          <li onMouseEnter={this.handleHoverTrue}>
            <Scrollchor to="#Portfolio" animate={{ offset: -45, duration: 800 }} beforeAnimate={this.handleClick}>
              <MdWork />
              <span>Portfolio</span>
            </Scrollchor>
          </li>
          <li onMouseEnter={this.handleHoverTrue}>
            <Scrollchor to="#Education" animate={{ offset: -45, duration: 800 }} beforeAnimate={this.handleClick}>
              <FaGraduationCap />
              <span>Education</span>
            </Scrollchor>
          </li>
          <li onMouseEnter={this.handleHoverTrue}>
            <Scrollchor to="#Work" animate={{ offset: -45, duration: 800 }} beforeAnimate={this.handleClick}>
              <FaBlackTie />
              <span>Work</span>
            </Scrollchor>
          </li>
          <li onMouseEnter={this.handleHoverTrue}>
            <Scrollchor to="#Volunteer" animate={{ offset: -45, duration: 800 }} beforeAnimate={this.handleClick}>
              <FaHeart />
              <span>Volunteer</span>
            </Scrollchor>
          </li>
          <li onMouseEnter={this.handleHoverTrue}>
            <Scrollchor to="#Interests" animate={{ offset: -45, duration: 800 }} beforeAnimate={this.handleClick}>
              <FaThumbsOUp />
              <span>Interests</span>
            </Scrollchor>
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setHover: (hover) => {
      dispatch(setNavBarHover(hover));
    },
  };
};

export default connect(null, mapDispatchToProps)(NavLinks);
