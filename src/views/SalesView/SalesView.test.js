import { render } from "@testing-library/react";
import SalesView from "./SalesView";
import { findPercentage } from "../../utils/helper";

const salesOverview = {
  uploads: 8,
  successfulUploads: 3,
  linesAttempted: 20,
  linesSaved: 4,
  lastUploadDate: 1605001226079,
};

const getByTextOverSeveralLines = (query) => {
  const component = render(<SalesView sales={salesOverview} />);

  const uploadText = component.getByText((content, node) => {
    return content.includes(query);
  });

  return uploadText;
};

test("renders upload sales details", () => {
  const salesText = getByTextOverSeveralLines(
    `${salesOverview.uploads} uploads`
  );

  expect(salesText).toBeInTheDocument();
});

test("renders line sales details", () => {
  const linesText = getByTextOverSeveralLines(
    `${salesOverview.linesSaved} lines`
  );

  expect(linesText).toBeInTheDocument();
});

test("renders upload percentage", () => {
  const { uploads, successfulUploads } = salesOverview;
  const uploadPercentage = findPercentage(uploads, successfulUploads);

  const uploadPercentageText = getByTextOverSeveralLines(
    `${uploadPercentage}%`
  );

  expect(uploadPercentageText).toBeInTheDocument();
});

test("renders lines percentage", () => {
  const { linesSaved, linesAttempted } = salesOverview;
  const linesPercentage = findPercentage(linesAttempted, linesSaved);
  const linesPercentageText = getByTextOverSeveralLines(`${linesPercentage}%`);
  expect(linesPercentageText).toBeInTheDocument();
});
