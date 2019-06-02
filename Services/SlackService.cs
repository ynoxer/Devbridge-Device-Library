using System;
using Challenge202.TestDeviceBooking.DataContracts;
using Newtonsoft.Json;
using SlackBotMessages;

namespace Challenge202.TestDeviceBooking.Services
{
    public class SlackService : ISlackService
    {
        private readonly string _webhookUrl;

        public SlackService(string webhookUrl)
        {
            _webhookUrl = webhookUrl;
        }

        public void SendMessage(string message)
        {
            //Workaround for escaping message string, as SBMClient doesn't do that
            message = JsonConvert.SerializeObject(message).Trim('"');
            SBMClient client = new SBMClient(_webhookUrl);
            Message msg = new Message(message, "test-devices-alerts", "Mother of devices", ":daenerys_targeryan:");
            client.Send(msg);
        }
    }
}
