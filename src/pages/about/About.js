import css from './About.module.scss';

const htmlString = `
  <h2 id="pageTitle">About Title</h2>
  <p id="description">
    lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
`;

function About(props) {
  const dom = new DOMParser().parseFromString(htmlString, 'text/html');

  dom.getElementById('pageTitle').setAttribute('class', css.title);
  dom.getElementById('description').setAttribute('class', css.description);

  return (
    <div className="row">
      {/* <div className="col-md-12">
        <h2 className={css.title}>About</h2>
      </div> */}

      <div dangerouslySetInnerHTML={{ __html: dom.body.innerHTML }}></div>
    </div>
  );
}

export default About;
