using OpenQA.Selenium.Remote;
using OpenQA.Selenium.Firefox;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;

namespace AureliaTSApp.Test
{
    [TestClass]
    public class UnitTest1
    {
        public static string BaseUrl = "http://localhost/AureliaTSApp";
        [TestMethod]
        [Owner("Firefox")]
        public void TestMethod1()
        {
            var driver = new FirefoxDriver();
            driver.Navigate().GoToUrl(BaseUrl + "/index.html");

            driver.FindElement(By.Id("username")).SendKeys("");

            driver.FindElement(By.Id("username")).SendKeys("testUser");
            Assert.AreEqual(driver.FindElement(By.Id("username")).GetAttribute("value"), "testUSer");
        }
    }
}
