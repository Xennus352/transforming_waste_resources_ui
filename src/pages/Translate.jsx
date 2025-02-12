import React, { useState } from 'react';
import axios from 'axios';

const Translate = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    setLoading(true);
    setTranslatedText(''); // Clear previous translation

    // Prepare the data for the API request
    const data = {
      q: text,
      source: 'en', // Source language
      target: 'my', // Target language (Burmese)
      format: 'text'
    };

    const config = {
      method: 'post',
      url: 'https://libretranslate.com/translate',
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      },
      data: data
    };

    try {
      const response = await axios(config);
      // Assuming the translated text is in the response data
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
      setTranslatedText('Error translating text.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text to translate"
      />
      <button onClick={handleTranslate} disabled={loading}>
        {loading ? 'Translating...' : 'Translate'}
      </button>
      <div>
        <h3>Translated Text:</h3>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default Translate;