import time

from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec



def press_analyze_button(web_driver_utils):
    web_driver_utils \
        .click(xpath="//*[@id='root']/div/main/div[1]/button[3]")
def fill_link(web_driver_utils):
    web_driver_utils\
    .fill(xpath="//*[@id='root']/div/main/div[1]/input",value='https://www.youtube.com/watch?v=f5VCBU-bZpI')
def bar_loading(driver=None):
    element = WebDriverWait(driver, 2).until(
        ec.element_to_be_clickable((By.CSS_SELECTOR, "._center_17ccl_1"))
    )
    return element.is_displayed()

def error_displayed(driver=None):
    element = WebDriverWait(driver,2).until(
        ec.element_to_be_clickable((By.XPATH,"/html/body/div/div/main/div[2]/div/div"))
    )
    return element.is_displayed()

def result_displayed(driver=None):
    element = WebDriverWait(driver, 100).until(
        ec.element_to_be_clickable((By.XPATH, "/html/body/div[@id='root']/div[@class='page-box']/main[@class='padding-sides fix-height']/section[@class='_result_1r17a_1']"))
    )
    return element.is_displayed() and "Title" in element.text and "Summary text" in element.text and "Date" in element.text and "Summary state:" in element.text

