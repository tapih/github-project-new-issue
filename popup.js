const btn = document.getElementById('btn');
btn.addEventListener("click", function() {
  const inputOrg = document.querySelector('.container__block_org > input');
  const inputRepo = document.querySelector('.container__block_repo > input');
  chrome.storage.sync.set({ 'organization': inputOrg.value, 'repository': inputRepo.value });
  console.log(`Set ${inputOrg.value} to organization and ${inputRepo.value} to repository.`);
});

chrome.storage.sync.get(['organization', 'repository'], ({ organization, repository }) => {
  if ( organization === undefined || repository === undefined) {
    console.log(`organization and repository should not be undefined: organization=${organization}, repository=${repository}`);
    return;
  }

  const inputOrg = document.querySelector('.container__block_org > input');
  const inputRepo = document.querySelector('.container__block_repo > input');
  inputOrg.value = organization;
  inputRepo.value = repository;
  console.log(`Load ${inputOrg.value} as organization and ${inputRepo.value} ad repository.`);
});

