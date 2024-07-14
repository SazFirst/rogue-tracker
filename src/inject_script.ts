// /**
//  * injectScript - Inject internal script to available access to the `window`
//  *
//  * @param  {type} file_path Local path of the internal script.
//  * @param  {type} tag The tag as string, where the script will be append (default: 'body').
//  * @see    {@link http://stackoverflow.com/questions/20499994/access-window-variable-from-content-script}
//  */
// function injectScript(file_path: string): void {
//   const script = document.createElement('script');
//   script.setAttribute('type', 'text/javascript');
//   script.setAttribute('src', file_path);
//   // script.onload = (): void => {
//   //   script.remove();
//   // };

//   const html = document.documentElement;
//   html.appendChild(script);
// }

// let url;

// try {
//   url = browser.runtime.getURL('content.js');
// } catch (err) {
//   url = chrome.runtime.getURL('content.js');
// }

// injectScript(url);
