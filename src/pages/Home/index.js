import React from "react";
import logo from "../../images/logo.svg";
import { Wrapper, Card, Templates, Form, Button } from "./styles";

const Home = () => {
  const [templates, setTemplates] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const resp = await fetch("https://api.imgflip.com/get_memes"),
        {
          data: { memes },
        } = await resp.json();
      setTemplates(memes);
    })();
  }, []);

  return (
    <Wrapper>
      <img src={logo} alt="MemeMaker" />

      <Card>
        <h2>Selecione um template</h2>
        <Templates>
          {templates.map((template) => (
            <button type="button" key={template.id}>
              <img src={template.url} alt={template.name}></img>
            </button>
          ))}
        </Templates>

        <h2>Textos</h2>

        <Form>
          <input placeholder="Texto #1" />
          <input placeholder="Texto #1" />
          <input placeholder="Texto #1" />

          <Button type="submit">MakeMyMeme!</Button>
        </Form>
      </Card>
    </Wrapper>
  );
};

export default Home;
