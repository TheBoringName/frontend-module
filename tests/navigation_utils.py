def go_to_upload(web_driver_utils):
    web_driver_utils \
        .click(xpath="/html/body/div[@id='root']/header[@class='header ']/nav[@class='main-nav']/ul[@class='links-container']/li[2]/a[@class='nav-link']")
    return web_driver_utils

def go_to_history(web_driver_utils):
    web_driver_utils \
        .click(xpath="/html/body/div[@id='root']/header[@class='header ']/nav[@class='main-nav']/ul[@class='links-container']/li[3]/a[@class='nav-link']")
    return web_driver_utils

def go_to_homepage(web_driver_utils):
    web_driver_utils \
        .click(xpath="/html/body/div[@id='root']/header[@class='header nav-open']/nav[@class='main-nav']/ul[@class='links-container']/li[1]/a[@class='nav-link']")
    return web_driver_utils
