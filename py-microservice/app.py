import tensorflow as tf
import numpy as np
from tensorflow.keras import layes, models
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import classification_report

# Assuming you have a dataset with images and corresponding labels
# X_train, X_test, y_train, y_test = load_and_preprocess_dataset()

# Example code for loading and preprocessing dataset is not provided here.

# Encode labels

label_encoder = LabelEncoder()
y_train_encoded = label_encoder.fit_transform(y_train)
y_test_encoded = label_encoder.transform(y_test)
