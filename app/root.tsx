import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Navbar } from "./components/navbar";
import styles from './styles/app.css'

export const links: LinksFunction = () => {
	return [ { rel: 'stylesheet', href: styles } ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "crypto tracker",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="grid h-screen grid-flow-col grid-cols-10 bg-gray-800">
			<div className="w-24 max-h-screen col-span-1">
				<Navbar />
			</div>
			<div className="col-span-9 max-h-screen p-4">
				<Outlet />
			</div>
		</div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
