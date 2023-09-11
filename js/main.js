var _currentTheme = "default-theme";

function hanleChangeThem(e) {
  const newTheme = `${e.value}-theme`;

  const body = document.getElementsByTagName("body")[0];
  body.classList.remove(_currentTheme);
  body.classList.add(newTheme);

  _currentTheme = newTheme;
}
