# Order Tracking System

A responsive order-tracking interface built with Next.js, React, and TypeScript. It helps customers understand delivery progress, review order details, and find the next step when a shipment needs attention.

The interface includes three delivery scenarios, a shared progress timeline, and an order summary that adapts to mobile and desktop screens.

> **Project status:** Frontend demonstration using sample order data. Live tracking, customer support, email notifications, and carrier integrations are not connected.

## Features

- **Delivery scenario tabs** — Switch between a delayed order, a package marked delivered but not received, and tracking that is not yet available.
- **Status-aware timeline** — Highlight progress through processing, shipped, out for delivery, and the final delivery stage.
- **Responsive layout** — Display a vertical timeline on smaller screens and a horizontal timeline on large screens, with a two-column desktop layout.
- **Delivery context** — Show estimated arrival dates, revised estimates, and carrier notes for the selected scenario.
- **Order summary** — Display the product, quantity, price, recipient, and delivery address.
- **Expandable order details** — Review shipping, total cost, and delivery partner information.
- **Contextual help prompts** — Present relevant next steps for delivery updates, missing packages, and order assistance.

## Delivery Scenarios

| Scenario | Timeline progress | Information shown | Displayed action |
| --- | --- | --- | --- |
| Delayed order | Processing and shipped highlighted | Updated and previous delivery estimates | Ask for a delivery update |
| Delivered but not received | All stages highlighted; final stage marked delivered | Delivery time and carrier drop-off note | Report a missing package |
| Tracking unavailable | Processing highlighted | Estimated delivery and tracking availability message | Get help with this order |

The action links currently return to the home page. The support section and notification copy illustrate the intended experience; they do not submit requests or send emails.

## Tech Stack

| Technology | Role |
| --- | --- |
| Next.js 16 · App Router | Application framework and routing |
| React 19 | Component-based interface |
| TypeScript 5 | Typed component contracts and data |
| Tailwind CSS 4 | Utility-based styling and responsive layouts |
| daisyUI 5 | Tabs, timelines, navigation, and collapsible sections |
| React Icons 5 | Interface icons |
| ESLint 9 | Code linting |

Exact dependency versions are recorded in `package.json` and `package-lock.json`.

## Getting Started

### Prerequisites

- Node.js **20.9 or later**, as required by the locked Next.js dependency.
- npm and Git.

### Installation

```bash
git clone https://github.com/officialbondondatta/order-tracking-system.git
cd order-tracking-system
npm ci
```

### Run locally

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000) in your browser. Changes to the application files are reflected during development.

No environment variables or external service credentials are required for the current demo. The project uses `next/font/google` for Geist fonts, which may require network access during development or builds.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create a production build. |
| `npm start` | Serve the production build; run the build command first. |
| `npm run lint` | Run ESLint. |

To run a production build locally:

```bash
npm run build
npm start
```

## Project Structure

```text
src/app/
├── components/
│   ├── DeliveryTrackings/
│   │   ├── DeliveryDetailsDelayed.tsx
│   │   ├── DeliveryDetailsDeliveredNotRecieved.tsx
│   │   └── DeliveryTrackingUnavailable.tsx
│   ├── DeliveryStatus.tsx
│   ├── OrderDetails.tsx
│   └── TrackYourOrder.tsx
├── shared/
│   └── Navbar.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```

- **`page.tsx`** renders the tracking page at `/`.
- **`TrackYourOrder.tsx`** composes the scenario tabs and shared order details.
- **`DeliveryTrackings/`** contains the messaging, estimates, and actions for each scenario.
- **`DeliveryStatus.tsx`** determines which timeline stages are highlighted from its `state` prop.
- **`OrderDetails.tsx`** holds the sample order data and renders the summary, address, and support section.
- **`layout.tsx`** sets the application metadata, fonts, navigation, and light theme.
- **`globals.css`** imports Tailwind CSS, configures daisyUI, and defines scrollbar styles.

## Customization

### Update the sample order

Edit the `orderDetails` object in `src/app/components/OrderDetails.tsx` to change the customer, address, product, quantity, price, or delivery partner. The order ID and placement date are defined separately in `TrackYourOrder.tsx`.

### Change delivery messaging

Edit the relevant component in `src/app/components/DeliveryTrackings/` to update estimates, descriptions, carrier notes, and action labels. Timeline timestamps are currently defined in `DeliveryStatus.tsx`.

### Extend delivery states

Update the `IStatusProps` state union and `isStepActive` logic in `DeliveryStatus.tsx`, then add the corresponding scenario component and tab in `TrackYourOrder.tsx`.

### Connect real order data

Replace the hardcoded sample values with data from your order service, map carrier statuses to the timeline, and connect the help links to working support flows. Authentication, order lookup, persistence, and automatic status updates must be implemented separately.

## Current Scope

This repository demonstrates the customer-facing tracking experience. It currently has no backend, database, carrier API, authentication, or automated test suite. The scenario tabs change the displayed example; they do not represent live shipment events.

## Contributing

Suggestions and improvements are welcome through [GitHub issues](https://github.com/officialbondondatta/order-tracking-system/issues) and pull requests.

1. Fork the repository and create a branch for your change.
2. Keep changes focused and describe the behavior they improve.
3. Run `npm run lint` and `npm run build`.
4. Check all three scenarios at mobile and desktop widths.
5. Open a pull request with a clear description and screenshots for visual changes.

## Author

Created by [Bondon Datta](https://github.com/officialbondondatta).

## License

No license file is currently included in this repository. Contact the repository owner for permission and terms before reusing or distributing the code.
