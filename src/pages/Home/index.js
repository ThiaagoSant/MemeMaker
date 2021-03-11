import React from "react";
import qs from "qs";
import logo from "../../images/logo.svg";
import { Wrapper, Card, Templates, Form, Button } from "./styles";

const Home = () => {
  const [templates, setTemplates] = React.useState([]),
    [selectedTemplates, setSelectedTemplates] = React.useState(null),
    [boxes, setBoxes] = React.useState([]),
    [generatedMeme, setGeneratedMeme] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const resp = await fetch("https://api.imgflip.com/get_memes"),
        {
          data: { memes },
        } = await resp.json();
      setTemplates(memes);
    })();
  }, []);

  const handleInputChange = (index) => (event) => {
    const newValues = boxes;
    newValues[index] = event.target.value;
    setBoxes(newValues);
  };

  const handleSelectedTemplate = (template) => {
    setSelectedTemplates(template);
    setBoxes([]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const params = qs.stringify({
      template_id: selectedTemplates.id,
      username: "labaxurias",
      password: "labaxurias",
      boxes: boxes.map((text) => ({ text })),
    });

    const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`),
      {
        data: { url },
      } = await resp.json();

    setGeneratedMeme(url);
  };

  const handleReset = () => {
    setSelectedTemplates(null);
    setBoxes([]);
    setGeneratedMeme(null);
  };

  return (
    <Wrapper>
      <img src={logo} alt="MemeMaker" />

      <Card>
        {generatedMeme && (
          <>
            <img src={generatedMeme} alt="Generate Meme" />
            <Button type="submit" onClick={handleReset}>
              Criar outro meme!
            </Button>
          </>
        )}

        {!generatedMeme && (
          <>
            <h2>Selecione um template</h2>
            <Templates>
              {templates.map((template) => (
                <button
                  onClick={() => handleSelectedTemplate(template)}
                  type="button"
                  key={template.id}
                  className={
                    template.id === selectedTemplates?.id ? "selected" : ""
                  }
                >
                  <img src={template.url} alt={template.name}></img>
                </button>
              ))}
            </Templates>

            {selectedTemplates && (
              <>
                <h2>Textos</h2>
                <Form onSubmit={handleFormSubmit}>
                  {new Array(selectedTemplates.box_count)
                    .fill("")
                    .map((_, index) => (
                      <input
                        key={String(Math.random())}
                        placeholder={`Text #${index + 1}`}
                        onChange={handleInputChange(index)}
                      />
                    ))}

                  <Button type="submit">MakeMyMeme!</Button>
                </Form>
              </>
            )}
          </>
        )}
      </Card>
    </Wrapper>
  );
};

export default Home;
