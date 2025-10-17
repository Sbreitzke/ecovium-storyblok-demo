# Storyblok Multilingual Setup Guide

## Step 1: Enable Languages in Storyblok

1. **Go to Storyblok Dashboard**: https://app.storyblok.com/
2. **Navigate to Settings**: Click Settings in the left sidebar
3. **Click Internationalization**
4. **Add Languages**:
   - Default language: `de` (German)
   - Additional language: `en` (English)
5. **Save Settings**

## Step 2: Create Component Schemas

We'll create three main components with field-level translations:

### Component 1: Hero Section
**Name**: `hero_section`
**Fields** (all translatable):
- `headline` (Text, translatable)
- `subtext` (Textarea, translatable)
- `video_url` (Asset, not translatable - same video for both languages)
- `cta_primary_text` (Text, translatable)
- `cta_primary_link` (Text, translatable)
- `cta_secondary_text` (Text, translatable)
- `cta_secondary_link` (Text, translatable)

### Component 2: Customer Card
**Name**: `customer_card`
**Fields** (all translatable except image):
- `image` (Asset, not translatable)
- `company_name` (Text, not translatable - "MERCEDES", "BENUTA", etc.)
- `title` (Text, translatable)
- `description` (Textarea, translatable)

### Component 3: Service Category
**Name**: `service_category`
**Fields** (all translatable):
- `title` (Text, translatable) - "Shipping", "Warehouse", "Customs", "Transport"
- `description` (Textarea, translatable)
- `details` (Richtext, translatable) - for the expandable content
- `icon_name` (Text, not translatable) - for icon mapping

## Step 3: Create Page Structure

Create a new Story called `homepage` with these components:
- One `hero_section` component
- One `customer_cards` block (array of 4 `customer_card` components)
- One `service_categories` block (array of 4 `service_category` components)

## Step 4: Enable Field-Level Translation

For each component schema:
1. Edit the component
2. For each translatable field, check the "Translatable" checkbox
3. Save the component

## Step 5: Add Content

Once languages are configured:
1. Edit the homepage story
2. Switch language in the dropdown (top right in Visual Editor)
3. Fill in German content (default)
4. Switch to English and fill in English translations

## Current Content to Migrate

### Hero Section (DE):
- Headline: "Simple Chain all-in-one logistics solution"
- Subtext: "Ecovium's integrated logistics solutions are developed by a team of logistics IT experts from various areas who collaborate closely to devise intelligent solutions for the entire value chain."

### Customer Cards (DE):
1. MERCEDES - "Ensuring the integrity of DHLs warehouse"
2. BENUTA - "Ensuring the integrity of DHLs warehouse"
3. DHL - "Ensuring the integrity of DHLs warehouse"
4. COFFE - "Ensuring the integrity of DHLs warehouse"

### Service Categories (DE):
1. Shipping
2. Warehouse
3. Customs - "With our solutions, you optimize your processes around customs and foreign trade, compliance and risk management including preferential rules of origin."
4. Transport
