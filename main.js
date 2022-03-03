chrome.storage.sync.get(['organization', 'repository'], ({ organization, repository }) => {
  if (organization === undefined || repository === undefined) {
    console.log(`organization and repository should not be undefined: organization=${organization}, repository=${repository}`);
    return;
  }

  const parent = document.querySelector('#memex-root > div[display=contents] > div.Box-sc-1gh2r6s-0:nth-child(2) > div.Box-sc-1gh2r6s-0:nth-child(2)');
  const a = document.createElement('a');
  a.setAttribute('href', `/${organization}/${repository}/issues/new/choose`)

  a.classList.add('btn');
  a.classList.add('btn-primary');
  a.style = 'margin: 0 1rem 0 0.2rem';

  const s1 = document.createElement('span');
  s1.classList.add('d-none')
  s1.classList.add('d-md-block')
  s1.textContent = 'New issue';
  a.appendChild(s1);

  const s2 = document.createElement('span');
  s2.classList.add('d-block')
  s2.classList.add('d-md-none')
  s2.textContent = 'New';
  a.appendChild(s2);

  parent.insertBefore(a, parent.firstChild.nextSibling);
});
