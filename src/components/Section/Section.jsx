import PropTypes from 'prop-types';
import { Task, TitleTask } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Task>
      <TitleTask>{title}</TitleTask>
      {children}
    </Task>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
