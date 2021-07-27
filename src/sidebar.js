import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Accordion from './Accordion';
import { accordionData } from './utils/content';

export default function props() {
  return (
    <Menu>
      <div className="accordion">
          {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/company">
        Company
      </a>

      <a className="menu-item" href="/design">
        Design
      </a>

      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="/contact">
       Contact
      </a>

      <a className="menu-item" href="/gallery">
        Gallery
      </a>
    </Menu>
  );
};