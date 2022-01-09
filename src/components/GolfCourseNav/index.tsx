import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

import { ADD_GOLE_COURSE, VIEW_GOLF_COURSES} from '@/constants';

const GolfCourseNav = () => {
  return (
    <Nav
      className="flex flex-row justify-end border-b-2"
      defaultActiveKey={ADD_GOLE_COURSE}
      variant="pills"
    >
    <Nav.Item className="p-4 hover:bg-violet-400">
      <Link href={ADD_GOLE_COURSE}><a>Add Golf Course</a></Link>
    </Nav.Item>
    <Nav.Item className="p-4 hover:bg-violet-400">
      <Link href={VIEW_GOLF_COURSES}><a>View Golf Courses</a></Link>
    </Nav.Item>
  </Nav>
  )
};

export default GolfCourseNav;