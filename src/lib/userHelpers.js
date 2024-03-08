import User from '@/lib/models/user';

export async function createUser(userData) {
    try {
        const user = new User(userData);
        const savedUser = await user.save();

        return savedUser;
    } catch (error) {
        throw new Error('Failed to create user');
    }
}


export async function findOne(query) {
    try {
        const user = await User.findOne(query);
        return user;
    } catch (error) {
        throw new Error('Failed to retrieve user');
    }
}


export async function getUserById(userId) {
    try {
        const user = await User.findById(userId);

        if (!user) {
        throw new Error('User not found');
        }

        return user;
    } catch (error) {
        throw new Error('Failed to retrieve user');
    }
}


export async function updateUser(userId, updatedData) {
    try {
        const user = await User.findByIdAndUpdate(userId, updatedData, { new: true });

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    } catch (error) {
        throw new Error('Failed to update user');
    }
}
  

export async function deleteUser(userId) {
    try {
        const result = await User.findByIdAndDelete(userId);

        if (!result) {
            throw new Error('User not found');
        }

        return result;
    } catch (error) {
        throw new Error('Failed to delete user');
    }
}


export async function getAllUsers(filter = {}) {
    try {
        const users = await User.find(filter); // optional filter parameter
        return users;
    } catch (error) {
        throw new Error('Failed to retrieve users');
    }
}

export async function createResetPasswordToken(user) {
    try {
      const resetToken = crypto.randomBytes(32).toString('hex');
      user.resetPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
      user.resetPasswordExpires = Date.now() + 3600000; // Expires in 1 hour
      await user.save();
      return resetToken;
    } catch (error) {
      throw new Error('Failed to create reset password token');
    }
  }

export async function sendPasswordResetEmail(user, resetToken) {
  try {
    const resetUrl = `http://your-app-domain/reset-password/${resetToken}`; // Replace with your actual reset link
    const emailContent = `
      Click the link below to reset your password:
      ${resetUrl}
    `;
    await transporter.sendMail({
      from: 'your_email@gmail.com',
      to: user.email,
      subject: 'Password Reset Request',
      text: emailContent,
    });
  } catch (error) {
    throw new Error('Failed to send password reset email');
  }
}
