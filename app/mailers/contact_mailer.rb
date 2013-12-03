class ContactMailer < ActionMailer::Base
  default from: "jumpforjoysf@gmail.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.email_confirmation.subject
  #
  def email_confirmation(contact)
    @contact = contact

    mail to: contact.email, subject: "Bow Wow, Thanks for the Message! Super Dog"
  end

  def email_forward(contact)
    @contact = contact
    mail(to: "lisacf@gmail.com", subject: "From SuperDog Website")
  end
end
