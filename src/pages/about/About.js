import * as inputs from '../../exports/inputs';

import css from './About.module.scss';

const htmlString = `
  <h2 id="pageTitle">About Title</h2>
  <p id="description">
    lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
`;

const forms = [
  {
    component: 'INPUT_1',
    names: ['checkbox-1', 'checkbox-2'],
    type: 'checkbox',
  },
  {
    component: 'INPUT_2',
    names: ['input-1', 'input-2'],
    type: 'text',
  },
  {
    component: 'INPUT_3',
    names: ['email-1', 'email-2'],
    type: 'email',
  },
];

function About(props) {
  const dom = new DOMParser().parseFromString(htmlString, 'text/html');

  dom.getElementById('pageTitle').setAttribute('class', css.title);
  dom.getElementById('description').setAttribute('class', css.description);

  const renderInputs = () => {
    return forms.map((form, index) => {
      const Input = inputs[form.component];
      if (!Input) {
        return null;
      }
      return form.names.map((name, index) => {
        return <Input key={index} type={form.type} name={name} title="name" />;
      });
    });
  };

  return (
    <div className="row">
      {/* <div className="col-md-12">
        <h2 className={css.title}>About</h2>
      </div> */}
      {renderInputs()}

      <div dangerouslySetInnerHTML={{ __html: dom.body.innerHTML }}></div>
    </div>
  );
}

export default About;
