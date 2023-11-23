import unittest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service

from selenium.webdriver.support.wait import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager

from tests.navigation_utils import go_to_upload
from tests.upload_utils import  press_analyze_button, result_displayed, bar_loading
from tests.web_driver_utils import WebDriverUtils


class UploadPageTest(unittest.TestCase):

    def setUp(self):
        options = webdriver.ChromeOptions()
        options.add_experimental_option('excludeSwitches', ['enable-logging'])

        self.driver = webdriver.Chrome(
            service=Service(ChromeDriverManager().install()),
            options=options
        )
        self.driver.maximize_window()
        self.base_url = "http://localhost:8000/"
        self.driver.get(self.base_url)
        self.wait = WebDriverWait(self.driver, 10)

    def test_loading_bar(self):
        web_driver_utils = WebDriverUtils(driver=self.driver)
        go_to_upload(web_driver_utils)
        press_analyze_button(web_driver_utils)
        assert bar_loading(driver=self.driver)


    def test_result_displayed(self):
        web_driver_utils = WebDriverUtils(driver=self.driver)
        go_to_upload(web_driver_utils)
        press_analyze_button(web_driver_utils)
        assert result_displayed(driver=self.driver)

    def tearDown(self):
        self.driver.quit()


if __name__ == "__main__":
    unittest.main()

