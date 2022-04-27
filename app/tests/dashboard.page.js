import { Selector } from 'testcafe';

class DashboardPage {
  constructor() {
    this.pageId = '#list-dashboard-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(90000).expect(this.pageSelector.exists).ok();
  }

  async hasTable(testController) {
    const rowCount = Selector('tr').count;
    await testController.expect(rowCount).gte(4);
  }
}

export const dashboardPage = new DashboardPage();
