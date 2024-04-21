export const searchContact = (data, foundContact) => { 
    return data.filter(contact => contact.name?.toLowerCase().includes(foundContact.toLowerCase()) );
};