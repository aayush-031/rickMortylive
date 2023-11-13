import { test } from "@playwright/test";
import searchEpisode from "./episodePage/seachEpisode.js";
import searchBox from "./homePage/searchBox.js";
import searchLocation from "./LocationPage/searchLocation.js";

test("Home Page Filter Test Case", async ({ page }) => {
  await searchBox(page);
});

test("Seach Location Test Case", async ({ page }) => {
  await searchLocation(page);
});

test("Seach Episode Test Case", async ({ page }) => {
  await searchEpisode(page);
});
