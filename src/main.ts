import "reflect-metadata";
import { Container } from "typedi";
import { AppointmentService } from "./appointments/AppointmentService";
import { EmailService } from "./notifications/EmailService";
import { SMSService } from "./notifications/SMSService";

Container.set(SMSService, new EmailService()); // Swapping SMS with Email

const service = Container.get(AppointmentService);

service.bookAppointment("john@example.com", "Friday 10AM", 100)
  .then(res => console.log(res))
  .catch(err => console.error(err));
