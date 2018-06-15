export class FormServiceClient {
  saveForm(form) {
    return fetch('http://localhost:3000/api/form', {
      method: 'post',
      body: JSON.stringify(form),
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  findAllForms() {
    return fetch('http://localhost:3000/api/form')
      .then(response => response.json());
  }
  findFormById(formId) {
    return fetch('http://localhost:3000/api/form/' + formId)
      .then(response => response.json());
  }
}
