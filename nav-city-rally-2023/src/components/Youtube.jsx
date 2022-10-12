import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledVideo = styled.div`
  overflow: hidden;
  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
`


const YoutubeEmbed = ({ embedId }) => (
  <StyledVideo>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </StyledVideo>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;