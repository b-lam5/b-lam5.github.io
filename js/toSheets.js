    async function sendToGoogleSheet() {
      const inputText = document.getElementById('mailingList').value;
      const webAppUrl = 'https://script.google.com/macros/s/AKfycbxjrpO_yBP80IK3W0_GPGH7E2mU533LNdtB6boA7IcPv22eA2CKbBAEG96Pdhraeijutg/exec'; // Replace with your URL
      if (inputText) {
      try {
        const response = await fetch(webAppUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify({ inputText: inputText, from: 'yogaWebsite' }),
        });

        const result = await response.text();
        console.log(result);
        alert('Thank you! You\'re subscribed.');
      } catch (error) {
        console.error('Error sending data:', error);
        alert('Error sending data to Google Sheet.');
      } 
    }
    }