# Plan: Display Dummy Incidents Data in a Table

## Goal
Fulfill the pending TODO task from `Tasks.md`: "I need dummy data for incidents and I need to display it in a table."

## 1. Define the Data Model
- Create an interface `Incident` to structure the dummy data.
  * Fields to include: `id` (string/number), `title` (string), `status` (string, e.g., "Open", "In Progress", "Resolved"), `severity` (string, e.g., "Low", "Medium", "High", "Critical"), and `dateReported` (string/Date).

## 2. Generate Dummy Data
- Create an array of `Incident` objects with mock data covering different severities and statuses. 
- Example: 5 to 10 mock records.
- This can be placed in a new file `src/data/mockIncidents.ts` or within the component file directly depending on preference for structure.

## 3. Create the `IncidentTable` Component
- Create `src/component/IncidentTable.tsx`.
- The component will import the mock data (or define it internally) and render an HTML `<table>`.
- Include standard table elements: `<thead>` for column headers, `<tbody>` for the mapping over the dummy data, and `<tr>`/`<td>` with inline styles mapping the incident fields.
- Apply styling directly via inline styles (as per the specific project guidelines avoiding CSS frameworks/modules).
  * Make the table readable with `borderCollapse`, `padding`, and basic border coloring.
  * Optionally, use row styling to differentiate severities (e.g., Critical = red tint, Resolved = green tint).

## 4. Integrate into Routing
- Since routing has been configured (as noted in `Tasks.md` ✅ Done items), import the new `IncidentTable` component into `App.tsx` (or `main.tsx` depending on where routes are).
- Add a new route, e.g., `<Route path="/incidents" element={<IncidentTable />} />`.
- Add a navigation link to the Navbar in `App.tsx` to easily navigate to the new Incidents page.

## 5. Review & Testing
- Ensure TypeScript correctly type-checks the dummy data.
- Ensure the table renders as expected without any layout breakages.
- Check that navigation to `/incidents` successfully shows the dummy data table.
- Move the task to the "✅ Done" section in `Tasks.md`.
