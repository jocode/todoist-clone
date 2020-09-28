import React, { useState } from 'react';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar, FaCalendarAlt } from 'react-icons/fa';
import { useSelectedProjectValue } from '../../context';
import { AddProjects } from '../AddProject';
import { Projects } from '../Projects';

export const Sidebar = () => {

  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          className={active === 'inbox' ? 'active' : ''}
          data-testid="inbox"
          onClick={() => {
            setActive('inbox');
            setSelectedProject('INBOX');
          }}
        >
          <span><FaInbox /></span>
          <span> Inbox</span>
        </li>
        <li
          className={active === 'today' ? 'active' : ''}
          data-testid="today"
          onClick={() => {
            setActive('today');
            setSelectedProject('TODAY');
          }}
        >
          <span><FaRegCalendar /></span>
          <span> Today</span>
        </li>
        <li
          className={active === 'next_7' ? 'active' : ''}
          data-testid="next_7"
          onClick={() => {
            setActive('next_7');
            setSelectedProject('NEXT_7');
          }}
        >
          <span><FaCalendarAlt /></span>
          <span> Next 7 days</span>
        </li>
      </ul>

      <div
        className="sidebar__middle"
        onClick={() => {
          setShowProjects(!showProjects)
        }}>
        <span>
          <FaChevronDown className={!showProjects ? 'hidden-projects' : ''} />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projects">
        {showProjects && <Projects />}
      </ul>

      {showProjects && <AddProjects />}
    </div>
  )
};

/**
 * BEM Metodology
 b = block
 e = element
 m = modifier
 */