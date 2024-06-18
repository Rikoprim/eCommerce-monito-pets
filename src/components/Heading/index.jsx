import React from 'react';
import { Container } from 'react-bootstrap'
import './heading.scss'

const Heading = ({ headtitle, title, children }) => {
  return (
    <section className='heading'>
      <Container>
        <div className='heading-header'>
          <div className='heading-header-column'>
            <div className="heading-titleHead">{headtitle && <div className="heading-titleHead">{headtitle}</div>}</div>
            <div className="heading-title">{title}</div>
          </div>
          {children && React.Children.map(children, (child) => {
            if (child.props.slot === 'header') {
              return child;
            }
          })}
        </div>
        {children && React.Children.map(children, (child) => {
          if (!child.props.slot) {
            return child;
          }
        })}
      </Container>
    </section>
  )
}

export default Heading