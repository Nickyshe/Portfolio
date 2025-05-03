import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Version Control',
    'Hugo',
    'Docusaurus',
    'Astro starlight',
    'Mintlify',
    'Markdown',
    'JSON',
    'Gitbook',
    'Docsify',
    'MKdocs',
    'ReadMe',
    'Postman',
    'Swagger',
    'Confluence',
    'Notion',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Judith, and I enjoy writing technical content. My interest in
              technical writing began in 2023 when I was learning to code Android applications. I
              used to be intimidated by technical documentation and coding, but I discovered that
              writing about what I was learning helped me understand it better. I started my blog to
              share my knowledge and support others who might be facing similar challenges.
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of contributing to open source
              projects such as{' '}
              <a href="https://docs.fedoraproject.org/en-US/gaming/">the Fedora Gaming SIG</a>,{' '}
              <a href="https://technicalwritingmp.com/">Technical Writing Mentorship Program</a>,{' '}
              Everything Open Source Africa, and{' '}
              <a href="https://jetpath.codedynasty.dev/">JetPath,</a> a Javascript framework. My
              main focus now is writing developer documentation, technical articles, and tutorials.
            </p>

            <p>
              Recently, I led and collaborated with a team of technical writers to migrate a
              documentation site from Hugo to Docusaurus I am also currently leading the initiatives
              of Fedora Gaming SIG to improve the documentation of the project.
            </p>
            <p>
              You can find my articles on <a href="https://judy.hashnode.dev/">Hashnode</a>,{' '}
              <a href="https://builtin.com/authors/judith-etugbo">Builtin</a>,{' '}
              <a href="https://medium.com/@judypearls200">Medium</a>,{' '}
              <a href="https://hackernoon.com/u/judithetugbo">Hackernoon.</a>,{' '}
            </p>

            <p>Here are the tools and technologies I have worked with</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/pfp.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
