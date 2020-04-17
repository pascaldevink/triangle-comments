import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Column from './column';

const Row = ({
  standardWidth,
  breakpoints,
  spacing,
  children,
  className,
  maxColumnSize = 2,
  demo,
  vertical,
}) => {
  console.log(breakpoints[0]);
  return (
    <Wrapper
      standardWidth={standardWidth}
      className={className || ''}
      breakpoint={breakpoints[0]}
      spacingX={spacing[0]}
      spacingY={typeof spacing[1] === 'number' ? spacing[1] : spacing[0]}
      vertical={vertical}
    >
      {React.Children.toArray(children).map((item) => {
        return item ? (
          <>
            {item.props && item.props.noGrid ? (
              <>{item}</>
            ) : (
              <Column
                demo={demo}
                maxColumnSize={maxColumnSize}
                key='column'
                breakpoints={breakpoints}
                spacingX={spacing[0]}
                spacingY={
                  typeof spacing[1] === 'number' ? spacing[1] : spacing[0]
                }
                widths={item.props.widths}
              >
                {item}
              </Column>
            )}
          </>
        ) : null;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 -${(props) => props.spacingX}px 0 -${(props) => props.spacingX}px;
  width: ${(props) =>
    props.standardWidth ? '100%' : `calc(100% + ${props.spacingX * 2})`};
  @media (min-width: ${(props) => props.breakpoint}px) {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: ${(props) =>
      props.standardWidth
        ? '0'
        : `0 -${props.spacingX}px 0 -${props.spacingX}px`};
`;

Row.propTypes = {
  breakpoint: PropTypes.number,
  spacing: PropTypes.number,
};

Row.defaultProps = {
  breakpoint: 769,
  spacing: 8,
};

export default Row;