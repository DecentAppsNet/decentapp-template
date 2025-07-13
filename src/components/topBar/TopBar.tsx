// TopBar wraps the DecentBar with some props specific to the app. This TopBar component can be added to each screen of the app in a DRY way.
// For DecentBar docs, see "Using the DecentBar" at https://github.com/erikh2000/decent-portal .
import { DecentBar } from "decent-portal";

const appLinks = [
  { description: "Support", url: "TODO ADD LINK" } // An easy thing is to just change this link to a Github issues page for your repo.
];

// It's a nice thing if you replace "undefined" below with your name as a string, but you don't have to.
// Don't be shy about claiming credit for your work. The DecentBar wants to see you shine!
const contributorText = undefined;

function TopBar() {
  return <DecentBar appName="Decent App" appLinks={appLinks} contributorText={contributorText}/>
}

export default TopBar;