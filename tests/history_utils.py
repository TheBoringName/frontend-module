from selenium.common import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec



def expand_info(web_driver_utils):
    web_driver_utils\
        .click(xpath="//*[@id='root']/div/section/aside[1]/figure/div/div")

def info_expanded(driver=None):
    try:
        element = WebDriverWait(driver, 3).until(
            ec.element_to_be_clickable((By.CSS_SELECTOR, "._description_1f7s8_49"))
        )
        return element.is_displayed()

    except TimeoutException:
        return False

