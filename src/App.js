import React, { useState, useEffect } from 'react';
import {
  Authenticator,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  withAuthenticator,
  AIConversation
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { uploadImage, getStyleRecommendations } from './api';

Amplify.configure(awsconfig);

function App({ signOut, user }) {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [stylePreference, setStylePreference] = useState('');
  const [occasion, setOccasion] = useState('');
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (!file && !stylePreference) {
      alert('Please upload an image or enter style preferences');
      return;
    }

    setLoading(true);
    try {
      let imageKey = null;
      if (file) {
        imageKey = await uploadImage(file);
      }
      
      const result = await getStyleRecommendations({
        imageKey,
        stylePreference,
        occasion,
        userId: user.username
      });
      
      setRecommendations(result);
    } catch (error) {
      console.error('Error getting recommendations:', error);
      alert('Failed to get recommendations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View padding="2rem">
      <Flex direction="column" gap="1rem">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading level={1}>AI Fashion Stylist</Heading>
          <Button variation="link" onClick={signOut}>Sign Out</Button>
        </Flex>
        
        <Card>
          <Heading level={3}>Get Personalized Style Recommendations</Heading>
          
          <Flex direction="column" gap="1rem" marginTop="1rem">
            <Text>Upload a photo of yourself or an outfit you like:</Text>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            
            {imagePreview && (
              <Image
                src={imagePreview}
                alt="Preview"
                width="300px"
                objectFit="contain"
              />
            )}
            
            <TextField
              label="Style Preferences"
              placeholder="e.g., casual, formal, bohemian, minimalist"
              value={stylePreference}
              onChange={(e) => setStylePreference(e.target.value)}
            />
            
            <TextField
              label="Occasion"
              placeholder="e.g., work, date night, wedding, casual outing"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            />
            
            <Button
              variation="primary"
              onClick={handleSubmit}
              isLoading={loading}
              loadingText="Getting recommendations..."
            >
              Get Style Recommendations
            </Button>
          </Flex>
        </Card>
        
        {recommendations && (
          <Card>
            <Heading level={3}>Your Style Recommendations</Heading>
            <Text>{recommendations.description}</Text>
            
            {recommendations.outfitImages && (
              <Flex direction="row" gap="1rem" wrap="wrap" marginTop="1rem">
                {recommendations.outfitImages.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Outfit suggestion ${index + 1}`}
                    width="200px"
                    height="200px"
                    objectFit="cover"
                  />
                ))}
              </Flex>
            )}
          </Card>
        )}
        
        <Card>
          <Heading level={3}>Chat with AI Stylist</Heading>
          <AIConversation
            initialMessage="Hello! I'm your AI fashion stylist. How can I help you today?"
            toolConfig={{
              weatherTool: {
                description: "Get weather information to suggest appropriate outfits",
                parameters: {
                  type: "object",
                  properties: {
                    location: {
                      type: "string",
                      description: "The city and state/country"
                    }
                  },
                  required: ["location"]
                }
              }
            }}
          />
        </Card>
      </Flex>
    </View>
  );
}

export default withAuthenticator(App);