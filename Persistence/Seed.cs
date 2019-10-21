using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if (!context.Contacts.Any())
            {
                var contacts = new List<Contact>
                {
                    new Contact
                    {
                        Name = "John Smith",
                        Email = "john.smith@example.com",
                        Message = "My first message"
                    },

                    new Contact
                    {
                        Name = "Jane Doe",
                        Email = "jane.doe@example.com",
                        Message = "My second message"
                    }
                };

                context.Contacts.AddRange(contacts);
                context.SaveChanges();
            }
        }
    }
}