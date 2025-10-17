# Storyblok CMS Setup - Step-by-Step Guide

## 🎯 What We're Building

Multi-language (DE + EN) CMS for:
1. **Hero Section** - Video background, headline, subtext, CTAs
2. **Customer Success Cards** - 4 customer showcase cards
3. **Service Categories** - 4 main service areas (Shipping, Warehouse, Customs, Transport)

## Step 1: Enable Multilingual in Storyblok

1. Log into Storyblok: https://app.storyblok.com/
2. Select your space (the one with token `6lMkFYbpzLjY6HAOlz5yUQtt`)
3. Go to **Settings** → **Internationalization**
4. Click **"Add Language"**
5. Add these languages:
   - **Default language**: German (`de`)
   - **Additional language**: English (`en`)
6. Click **Save**

## Step 2: Create Component Schemas

### A. Create Hero Section Component

1. Go to **Components** in left sidebar
2. Click **"+ New Component"**
3. Fill in:
   - **Name**: `hero_section`
   - **Display name**: `Hero Section`
4. Add these fields (click "+ Add field"):

| Field Name | Field Type | Translatable | Required | Description |
|------------|------------|--------------|----------|-------------|
| `headline` | Text | ✅ Yes | ✅ Yes | Main headline |
| `subtext` | Textarea | ✅ Yes | ✅ Yes | Supporting text |
| `video_url` | Asset | ❌ No | ❌ No | Background video |
| `cta_primary_text` | Text | ✅ Yes | ❌ No | Primary button text |
| `cta_primary_link` | Text | ✅ Yes | ❌ No | Primary button link |
| `cta_secondary_text` | Text | ✅ Yes | ❌ No | Secondary button text |
| `cta_secondary_link` | Text | ✅ Yes | ❌ No | Secondary button link |

5. Click **Save**

### B. Create Customer Card Component

1. Click **"+ New Component"**
2. Fill in:
   - **Name**: `customer_card`
   - **Display name**: `Customer Success Card`
3. Add these fields:

| Field Name | Field Type | Translatable | Required | Description |
|------------|------------|--------------|----------|-------------|
| `image` | Asset (Images) | ❌ No | ✅ Yes | Customer/company image |
| `company_name` | Text | ❌ No | ✅ Yes | Company name (MERCEDES, etc.) |
| `title` | Text | ✅ Yes | ✅ Yes | Card title |
| `description` | Textarea | ✅ Yes | ✅ Yes | Card description |
| `link` | Text | ✅ Yes | ❌ No | Link to case study |

4. Click **Save**

### C. Create Service Category Component

1. Click **"+ New Component"**
2. Fill in:
   - **Name**: `service_category`
   - **Display name**: `Service Category`
3. Add these fields:

| Field Name | Field Type | Translatable | Required | Description |
|------------|------------|--------------|----------|-------------|
| `title` | Text | ✅ Yes | ✅ Yes | Category title |
| `description` | Textarea | ✅ Yes | ✅ Yes | Short description |
| `details` | Rich Text | ✅ Yes | ❌ No | Detailed information |
| `icon_name` | Text | ❌ No | ❌ No | Icon identifier |

4. Click **Save**

## Step 3: Create Homepage Story

1. Go to **Content** in left sidebar
2. Click **"+ Create new story"**
3. Fill in:
   - **Name**: `homepage`
   - **Slug**: `home`
4. Click **Create**

## Step 4: Add Components to Homepage

### A. Add Hero Section

1. In the homepage story, click **"+ Add block"**
2. Select **Hero Section** component
3. Fill in **German content** (default language):
   - **headline**: `Simple Chain all-in-one logistics solution`
   - **subtext**: `Ecovium's integrated logistics solutions are developed by a team of logistics IT experts from various areas who collaborate closely to devise intelligent solutions for the entire value chain.`
   - **cta_primary_text**: `Book Free Demo`
   - **cta_primary_link**: `#demo`
   - **cta_secondary_text**: `Learn More`
   - **cta_secondary_link**: `#learn`

4. Switch to **English** (dropdown in top right)
5. Fill in **English translations**:
   - **headline**: `Simple Chain all-in-one logistics solution`
   - **subtext**: `Ecovium's integrated logistics solutions are developed by a team of logistics IT experts from various areas who collaborate closely to devise intelligent solutions for the entire value chain.`
   - **cta_primary_text**: `Book Free Demo`
   - **cta_primary_link**: `#demo`
   - **cta_secondary_text**: `Learn More`
   - **cta_secondary_link**: `#learn`

### B. Add Customer Success Cards

1. Click **"+ Add block"** again
2. Select **Customer Success Card** component
3. Add 4 cards with this content:

**Card 1 - MERCEDES** (German):
- company_name: `MERCEDES`
- title: `Mercedes-Benz`
- description: `Sicherstellung der Integrität des DHL-Lagers`
- image: (upload /public/img/image-1961@2x.png)

**Card 1 - MERCEDES** (English):
- title: `Mercedes-Benz`
- description: `Ensuring the integrity of DHL's warehouse`

**Card 2 - BENUTA** (German):
- company_name: `BENUTA`
- title: `Benuta`
- description: `Sicherstellung der Integrität des DHL-Lagers`
- image: (upload /public/img/image-1960@2x.png)

**Card 2 - BENUTA** (English):
- title: `Benuta`
- description: `Ensuring the integrity of DHL's warehouse`

**Card 3 - DHL** (German):
- company_name: `DHL`
- title: `DHL`
- description: `Sicherstellung der Integrität des DHL-Lagers`
- image: (upload /public/img/image-1959@2x.png)

**Card 3 - DHL** (English):
- title: `DHL`
- description: `Ensuring the integrity of DHL's warehouse`

**Card 4 - COFFE** (German):
- company_name: `COFFE`
- title: `Coffe`
- description: `Sicherstellung der Integrität des DHL-Lagers`
- image: (upload /public/img/image-1962@2x.png)

**Card 4 - COFFE** (English):
- title: `Coffe`
- description: `Ensuring the integrity of DHL's warehouse`

### C. Add Service Categories

1. Click **"+ Add block"** again
2. Select **Service Category** component
3. Add 4 categories:

**Category 1 - Shipping** (German):
- title: `Versand`
- description: `Komplette Versandlösungen für Ihre Logistikkette`

**Category 1 - Shipping** (English):
- title: `Shipping`
- description: `Complete shipping solutions for your logistics chain`

**Category 2 - Warehouse** (German):
- title: `Lager`
- description: `Moderne Lagerverwaltungssysteme`

**Category 2 - Warehouse** (English):
- title: `Warehouse`
- description: `Modern warehouse management systems`

**Category 3 - Customs** (German):
- title: `Zoll`
- description: `Mit unseren Lösungen optimieren Sie Ihre Prozesse rund um Zoll und Außenhandel, Compliance und Risikomanagement einschließlich präferenzieller Ursprungsregeln.`

**Category 3 - Customs** (English):
- title: `Customs`
- description: `With our solutions, you optimize your processes around customs and foreign trade, compliance and risk management including preferential rules of origin.`

**Category 4 - Transport** (German):
- title: `Transport`
- description: `Effiziente Transportlösungen`

**Category 4 - Transport** (English):
- title: `Transport`
- description: `Efficient transport solutions`

## Step 5: Publish the Story

1. Click **Publish** button in top right
2. The content is now live!

## Step 6: Get the Story ID

1. Look at the URL in browser, it will be something like:
   `https://app.storyblok.com/#!/me/spaces/123456/stories/0/0/987654`
2. The last number (`987654`) is your story ID
3. Note this down - we'll need it to fetch the content

## Step 7: Test the CMS Integration

Once you've completed the Storyblok setup, we'll create a new page that fetches and displays this content with language switching!

## Next Steps

After completing this setup:
1. Provide me with the homepage story slug or ID
2. I'll create a new page that fetches from Storyblok
3. We'll test the DE/EN language switching
4. We can then migrate more sections to Storyblok!

## Troubleshooting

**Can't see language dropdown?**
- Make sure you saved the internationalization settings
- Refresh the page

**Fields not translatable?**
- Edit the component schema
- Check the "Translatable" checkbox for each field
- Save and refresh

**Content not showing?**
- Make sure story is Published (not just saved as draft)
- Check that you're using the correct space token
