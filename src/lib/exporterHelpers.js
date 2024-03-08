import Exporter from '@/lib/models/exporter';

export async function createExporterProfile(exporterData) {
    try {
        const exporter = new Exporter(exporterData);
        const savedUser = await exporter.save();

        return savedUser;
    } catch (error) {
        console.log({error})
        throw new Error('Failed to create exporter');
    }
}

export function findExporterByUserId(userId) {
    try {
        return Exporter.findOne({user: userId});
    } catch (error) {
        console.log({error})
        throw new Error('Failed to retrieve exporter');
    }
}

export async function findOneExporterProfile(query) {
    try {
        const exporter = await Exporter.findOne(query);
        return exporter;
    } catch (error) {
        console.log({error})
        throw new Error('Failed to retrieve exporter');
    }
}


export async function getExporterProfileById(exportId) {
    try {
        const exporter = await Exporter.findById(exportId);

        if (!exporter) {
        throw new Error('Exporter not found');
        }

        return exporter;
    } catch (error) {
        throw new Error('Failed to retrieve exporter');
    }
}


export async function updateExporterProfile(exportId, updatedData) {
    try {
        const exporter = await Exporter.findByIdAndUpdate(exportId, updatedData, { new: true });
        if (!exporter) {
            throw new Error('Exporter not found');
        }

        return exporter;
    } catch (error) {
        console.log({error});
        throw new Error('Failed to update exporter');
    }
}
  

export async function deleteExporterProfile(exportId) {
    try {
        const result = await Exporter.findByIdAndDelete(exportId);

        if (!result) {
            throw new Error('Exporter not found');
        }

        return result;
    } catch (error) {
        throw new Error('Failed to delete exporter');
    }
}


export function getAllExportersProfile(filter = {}) {
    try {
        return Exporter.find(filter); // optional filter parameter
    } catch (error) {
        throw new Error('Failed to retrieve exporters');
    }
}

export async function createResetPasswordToken(exporter) {
    try {
      const resetToken = crypto.randomBytes(32).toString('hex');
      exporter.resetPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
      exporter.resetPasswordExpires = Date.now() + 3600000; // Expires in 1 hour
      await exporter.save();
      return resetToken;
    } catch (error) {
      throw new Error('Failed to create reset password token');
    }
  }

export async function sendPasswordResetEmail(exporter, resetToken) {
  try {
    const resetUrl = `http://your-app-domain/reset-password/${resetToken}`; // Replace with your actual reset link
    const emailContent = `
      Click the link below to reset your password:
      ${resetUrl}
    `;
    await transporter.sendMail({
      from: 'your_email@gmail.com',
      to: exporter.email,
      subject: 'Password Reset Request',
      text: emailContent,
    });
  } catch (error) {
    throw new Error('Failed to send password reset email');
  }
}
