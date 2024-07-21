let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});
//Часть1
describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  },2000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  },2000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-muted-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  },2000);
});
//Часть2
describe("Github page tests more", () => {
  test("Check title Codespaces", async () => {
    await page.goto("https://github.com/features/codespaces");
    const title = await page.title();
    expect(title).toContain("GitHub Codespaces · GitHub");
  }, 2000);

  test("Check title Marketplace", async () => {
    await page.goto("https://github.com/marketplace");
    const title = await page.title();
    expect(title).toContain("Marketplace · Tools to improve your workflow · GitHub");
  }, 2000);

  test("The first main link attribute", async () => {
    await page.goto("https://github.blog/");
    const actual = await page.$eval("main a", (link) => link.getAttribute("href") );
    expect(actual).toEqual("https://github.blog/2024-07-08-beginners-guide-to-github-uploading-files-and-folders-to-github/");
  }, 2000);
});
