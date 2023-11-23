import time
import unittest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service

from selenium.webdriver.support.wait import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager

from tests.navigation_utils import go_to_upload, go_to_homepage, go_to_history
from tests.upload_utils import  press_analyze_button, result_displayed, bar_loading
from tests.web_driver_utils import WebDriverUtils

class NavigationTest(unittest.TestCase):

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

    def test_goto_upload(self):
        web_driver_utils = WebDriverUtils(driver=self.driver)
        go_to_upload(web_driver_utils)
        assert self.driver.current_url=="http://localhost:8000/upload"

    def test_goto_history(self):
        web_driver_utils = WebDriverUtils(driver=self.driver)
        go_to_history(web_driver_utils)
        assert self.driver.current_url == "http://localhost:8000/history"

    def test_goto_homepage(self):
        web_driver_utils = WebDriverUtils(driver=self.driver)
        go_to_upload(web_driver_utils)
        go_to_homepage(web_driver_utils)
        assert self.driver.current_url == "http://localhost:8000/"
    def tearDown(self):
        self.driver.quit()

if __name__ == '__main__':
    unittest.main()
