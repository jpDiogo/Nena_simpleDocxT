# Commands

All I needed to run the project was having `Node.js` installed.

1. Start your node project and install the '*docxtemplater*' and '*pizzip*' packages:

```bash
> cd <your_folder>
> npm init -y
> npm install --save docxtemplater pizzip
```

<ins>Disclamers:</ins> The `-y` flag exists to say 'yes' to everything when starting a node project. The pizzip package is used for zipping.

2. Have a `example.docx` word file like the one provided:

```txt
Hello, {name}!

This is a sample document created using Docx-Templater. We are excited to inform you that you have been selected for the position of {position} at our company.

Please find the details below:

Name: {name}
Age: {age}
Email: {email}
Phone: {phone}

Congratulations once again, and we look forward to welcoming you to our team!

Best regards,
The Docx-Templater Team

```
