"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiAddLine, RiApps2Line, RiLogoutBoxLine, RiLoader4Line, RiDeleteBin6Line, RiEdit2Line, RiEyeLine, RiPuzzle2Line } from 'react-icons/ri';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Dialog from '@/components/ui/Dialog';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

interface Plugin {
  id: string;
  name: string;
  description: string;
  author: string;
  githubUrl: string;
  docsUrl?: string | null;
  imageData?: string | null;
}

export default function AdminDashboard() {
  const [plugins, setPlugins] = useState<Plugin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddPluginForm, setShowAddPluginForm] = useState(false);
  const [editingPlugin, setEditingPlugin] = useState<Plugin | null>(null);
  
  // Add dialog state
  const [deleteDialog, setDeleteDialog] = useState({
    isOpen: false,
    pluginId: '',
    pluginName: ''
  });
  
  // Form state
  const [pluginName, setPluginName] = useState('');
  const [pluginDescription, setPluginDescription] = useState('');
  const [pluginAuthor, setPluginAuthor] = useState('');
  const [pluginGithubUrl, setPluginGithubUrl] = useState('');
  const [pluginDocsUrl, setPluginDocsUrl] = useState('');
  const [pluginImage, setPluginImage] = useState<File | null>(null);
  const [pluginImagePreview, setPluginImagePreview] = useState<string | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');
  
  const router = useRouter();
  const { data: session, status } = useSession();
  
  useEffect(() => {
    fetchPlugins();
  }, []);
  
  const fetchPlugins = async () => {
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/plugins?limit=100', {
        credentials: 'include'
      });
      
      if (!res.ok) {
        console.log('Failed to fetch plugins');
        setPlugins([]);
        setLoading(false);
        return;
      }
      
      const data = await res.json();
      setPlugins(data.plugins || []);
    } catch (error) {
      console.log(`Error fetching plugins:`, error);
      setError(`Failed to load plugins. Please try again.`);
    } finally {
      setLoading(false);
    }
  };
  
  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      router.push('/login');
    } catch (error) {
      console.log('Logout error:', error);
      router.push('/login');
    }
  };

  const handleAddPlugin = () => {
    setEditingPlugin(null);
    setPluginName('');
    setPluginDescription('');
    setPluginAuthor('');
    setPluginGithubUrl('');
    setPluginDocsUrl('');
    setPluginImage(null);
    setPluginImagePreview(null);
    setFormError('');
    setShowAddPluginForm(true);
  };

  const handleEditPlugin = (plugin: Plugin) => {
    setEditingPlugin(plugin);
    setPluginName(plugin.name);
    setPluginDescription(plugin.description);
    setPluginAuthor(plugin.author);
    setPluginGithubUrl(plugin.githubUrl);
    setPluginDocsUrl(plugin.docsUrl || '');
    setPluginImagePreview(plugin.imageData || null);
    setPluginImage(null);
    setFormError('');
    setShowAddPluginForm(true);
  };

  const handleDeletePlugin = async (pluginId: string, pluginName: string) => {
    setDeleteDialog({
      isOpen: true,
      pluginId,
      pluginName
    });
  };

  const confirmDeletePlugin = async () => {
    try {
      const res = await fetch(`/api/plugins/${deleteDialog.pluginId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to delete plugin');
      }

      // Close dialog
      setDeleteDialog({
        isOpen: false,
        pluginId: '',
        pluginName: ''
      });

      // Refresh the plugin list
      fetchPlugins();
    } catch (error) {
      console.error('Error deleting plugin:', error);
      alert('Failed to delete plugin. Please try again.');
      
      // Close dialog even on error
      setDeleteDialog({
        isOpen: false,
        pluginId: '',
        pluginName: ''
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPluginImage(null);
      setPluginImagePreview(null);
      return;
    }

    // Validate file is an image
    if (!file.type.startsWith('image/')) {
      setFormError('Please upload an image file');
      return;
    }

    // Validate file size (max 1MB)
    if (file.size > 1024 * 1024) {
      setFormError('Image must be less than 1MB');
      return;
    }

    setPluginImage(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPluginImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const convertImageToBase64 = async (file: File): Promise<string | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmitPlugin = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError('');

    // Validate fields
    if (!pluginName || !pluginDescription || !pluginAuthor || !pluginGithubUrl) {
      setFormError('Please fill all required fields');
      setFormLoading(false);
      return;
    }

    // Prepare plugin data
    const pluginData: any = {
      name: pluginName,
      description: pluginDescription,
      author: pluginAuthor,
      githubUrl: pluginGithubUrl,
      docsUrl: pluginDocsUrl || null,
    };

    // If a new image was uploaded, convert it to base64
    if (pluginImage) {
      try {
        pluginData.imageData = await convertImageToBase64(pluginImage);
      } catch (error) {
        console.error('Error converting image:', error);
        setFormError('Failed to process image. Please try a different image.');
        setFormLoading(false);
        return;
      }
    } else if (editingPlugin?.imageData && !pluginImagePreview) {
      // If editing and image was removed
      pluginData.imageData = null;
    } else if (editingPlugin?.imageData) {
      // If editing and using existing image
      pluginData.imageData = editingPlugin.imageData;
    }

    try {
      let res;
      if (editingPlugin) {
        // Update existing plugin
        res = await fetch(`/api/plugins/${editingPlugin.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(pluginData),
          credentials: 'include',
        });
      } else {
        // Create new plugin
        console.log('Sending plugin data:', JSON.stringify(pluginData));
        res = await fetch('/api/plugins', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(pluginData),
          credentials: 'include',
        });
      }

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Server response error:', {
          status: res.status,
          statusText: res.statusText,
          data: errorData
        });
        throw new Error(errorData.message || `Error: ${res.status} ${res.statusText}`);
      }

      // Reset and close form
      setShowAddPluginForm(false);
      setEditingPlugin(null);
      
      // Refresh the plugin list
      fetchPlugins();
    } catch (error) {
      console.error('Error saving plugin:', error);
      setFormError(error instanceof Error ? error.message : 'Failed to save plugin. Please try again.');
    } finally {
      setFormLoading(false);
    }
  };

  const cancelForm = () => {
    setShowAddPluginForm(false);
    setEditingPlugin(null);
  };
  
  return (
    <div className="min-h-screen bg-[#d7e1e1]">
      <div className="container mx-auto px-4 py-8 max-w-[1080px]">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Astreus Admin Dashboard</h1>
          <div className="flex items-center gap-6">
            {session?.user?.username && (
              <span className="text-gray-600">
                Hello, {session.user.username}
              </span>
            )}
            <Button 
              icon={<RiLogoutBoxLine size={18} />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
        
        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <RiPuzzle2Line size={24} />
            <h2 className="text-2xl font-bold">Plugin Management</h2>
          </div>
          
          {!showAddPluginForm && (
            <Button 
              icon={<RiAddLine size={18} />}
              onClick={handleAddPlugin}
            >
              Add Plugin
            </Button>
          )}
        </div>
        
        {/* Plugin Form */}
        {showAddPluginForm && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-md p-6 border-2 border-[#1e1e1e] mb-6"
          >
            <h3 className="text-xl font-bold mb-4">
              {editingPlugin ? 'Edit Plugin' : 'Add New Plugin'}
            </h3>
            
            {formError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700">
                {formError}
              </div>
            )}
            
            <form onSubmit={handleSubmitPlugin}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input
                  label="Plugin Name *"
                  value={pluginName}
                  onChange={(e) => setPluginName(e.target.value)}
                  placeholder="Enter plugin name"
                  fullWidth
                  required
                />
                <Input
                  label="Author *"
                  value={pluginAuthor}
                  onChange={(e) => setPluginAuthor(e.target.value)}
                  placeholder="Enter author name"
                  fullWidth
                  required
                />
              </div>
              
              <div className="mb-4">
                <Input
                  label="Description *"
                  value={pluginDescription}
                  onChange={(e) => setPluginDescription(e.target.value)}
                  placeholder="Enter plugin description"
                  fullWidth
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Input
                  label="GitHub URL *"
                  value={pluginGithubUrl}
                  onChange={(e) => setPluginGithubUrl(e.target.value)}
                  placeholder="Enter GitHub repository URL"
                  fullWidth
                  required
                />
                <Input
                  label="Documentation URL"
                  value={pluginDocsUrl}
                  onChange={(e) => setPluginDocsUrl(e.target.value)}
                  placeholder="Enter documentation URL (optional)"
                  fullWidth
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">Plugin Image</label>
                
                <div className="flex items-start gap-4">
                  {/* Image preview */}
                  {pluginImagePreview && (
                    <div className="relative mb-4 w-24 h-24 border-2 border-[#1e1e1e] overflow-hidden">
                      <img 
                        src={pluginImagePreview} 
                        alt="Plugin preview" 
                        className="w-full h-full object-cover"
                      />
                      <Button
                        onClick={() => {
                          setPluginImagePreview(null);
                          setPluginImage(null);
                        }}
                        className="absolute top-1 right-1 bg-white border-2 border-[#1e1e1e] !p-1 shadow-md"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </Button>
                    </div>
                  )}
                  
                  {/* File input */}
                  <div className="flex-1">
                    <input
                      type="file"
                      id="pluginImage"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="pluginImage"
                      className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-50"
                    >
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="mt-1 text-sm text-gray-600">Click to upload image</p>
                        <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 1MB</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <Button
                  onClick={cancelForm}
                  disabled={formLoading}
                >
                  Cancel
                </Button>
                <Button
                  isLoading={formLoading}
                >
                  {editingPlugin ? 'Update Plugin' : 'Add Plugin'}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
        
        {/* Delete Confirmation Dialog */}
        <Dialog
          isOpen={deleteDialog.isOpen}
          onClose={() => setDeleteDialog({ isOpen: false, pluginId: '', pluginName: '' })}
          title="Delete Plugin"
          description={`Are you sure you want to delete "${deleteDialog.pluginName}"? This action cannot be undone.`}
          confirmText="Delete"
          cancelText="Cancel"
          onConfirm={confirmDeletePlugin}
          variant="danger"
        />
        
        {/* Plugin List */}
        {loading ? (
          <div className="bg-white shadow-md p-6 border-2 border-[#1e1e1e]">
            <div className="flex justify-center items-center py-12">
              <RiLoader4Line className="animate-spin text-gray-500" size={36} />
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <div className="bg-white shadow-md p-6 border-2 border-[#1e1e1e]">
            <h2 className="text-xl font-bold mb-4">All Plugins</h2>
            
            {plugins.length === 0 ? (
              <p className="text-gray-500 py-4">No plugins found. Add your first plugin.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Author</th>
                      <th className="text-left py-3 px-4">Description</th>
                      <th className="text-right py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plugins.map((plugin) => (
                      <tr key={plugin.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{plugin.name}</td>
                        <td className="py-3 px-4">{plugin.author}</td>
                        <td className="py-3 px-4 truncate max-w-xs">{plugin.description}</td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              size="sm" 
                              icon={<RiEyeLine size={16} />}
                              onClick={() => router.push(`/plugins`)}
                            >
                              View
                            </Button>
                            <Button 
                              size="sm" 
                              icon={<RiEdit2Line size={16} />}
                              onClick={() => handleEditPlugin(plugin)}
                            >
                              Edit
                            </Button>
                            <Button 
                              size="sm" 
                              icon={<RiDeleteBin6Line size={16} />}
                              onClick={() => handleDeletePlugin(plugin.id, plugin.name)}
                            >
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 