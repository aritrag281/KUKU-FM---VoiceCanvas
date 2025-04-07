import React, { useState } from 'react';

const VoiceCanvasPrototype = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [promptInput, setPromptInput] = useState('');
  const [duration, setDuration] = useState(15);
  const [voiceStyle, setVoiceStyle] = useState('natural');
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleGenerate = () => {
    if (!promptInput.trim()) return;
    
    setGenerating(true);
    
    // Simulate generation delay
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
      setShowResults(true);
    }, 2000);
  };

  const resetForm = () => {
    setPromptInput('');
    setDuration(15);
    setVoiceStyle('natural');
    setGenerated(false);
    setShowResults(false);
  };

  return (
    <div className="flex flex-col w-full max-w-lg mx-auto bg-white rounded-lg shadow overflow-hidden">
      {/* App Header */}
      <div className="bg-indigo-800 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="white"/>
            <path d="M19 12C19 12.34 18.97 12.67 18.94 13C20.14 12.87 21 11.85 21 10.62V6.38C21 4.76 19.7 3.46 18.06 3.46H13.81C12.58 3.46 11.56 4.32 11.43 5.52C11.76 5.49 12.09 5.46 12.43 5.46C16.05 5.46 19 8.41 19 12Z" fill="white"/>
            <path d="M5.59 3.59C5.21 3.21 4.56 3.21 4.18 3.59C3.8 3.97 3.8 4.62 4.18 5L5.11 5.93C3.35 7.29 2.25 9.5 2.25 12C2.25 15.5 4.32 18.5 7.32 19.73L6.26 20.79C5.88 21.17 5.88 21.82 6.26 22.2C6.44 22.39 6.72 22.5 7 22.5C7.28 22.5 7.56 22.39 7.74 22.21L19.41 10.53C19.79 10.15 19.79 9.5 19.41 9.12C19.03 8.74 18.38 8.74 18 9.12L16.06 11.06C16.03 5.6 10.15 1.88 5.59 3.59Z" fill="white"/>
          </svg>
          <span className="text-xl font-semibold">Kuku FM</span>
        </div>
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>

      {/* Feature Navbar */}
      <div className="flex border-b">
        <button
          className={`flex-1 py-3 text-center font-medium ${activeTab === 'create' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('create')}
        >
          Create
        </button>
        <button
          className={`flex-1 py-3 text-center font-medium ${activeTab === 'library' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('library')}
        >
          My Library
        </button>
        <button
          className={`flex-1 py-3 text-center font-medium ${activeTab === 'discover' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('discover')}
        >
          Discover
        </button>
      </div>

      {/* VoiceCanvas Feature */}
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-1">VoiceCanvas</h2>
          <p className="text-sm text-gray-600">Create your own personalized audio content</p>
        </div>

        {!showResults ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">What would you like to hear?</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                rows={3}
                placeholder="Example: A mystery story set in Mumbai with a female detective"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
              <div className="flex space-x-2">
                {[5, 10, 15, 30, 60].map((time) => (
                  <button
                    key={time}
                    className={`py-2 px-3 text-sm rounded-full ${
                      duration === time ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => setDuration(time)}
                  >
                    {time} min
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Voice Style</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={voiceStyle}
                onChange={(e) => setVoiceStyle(e.target.value)}
              >
                <option value="natural">Natural Narrator</option>
                <option value="dramatic">Dramatic</option>
                <option value="calming">Calming</option>
                <option value="energetic">Energetic</option>
                <option value="character">Character Voice</option>
              </select>
            </div>

            <button
              className={`w-full py-3 rounded-lg font-medium ${
                promptInput.trim() ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              onClick={handleGenerate}
              disabled={!promptInput.trim() || generating}
            >
              {generating ? 'Creating your audio...' : 'Generate My Audio'}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">The Mumbai Mystery</h3>
              <p className="text-sm text-gray-600 mb-2">15 min · Created just for you</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="w-10 h-10 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <div className="ml-3">
                    <div className="h-1 bg-gray-300 rounded-full w-48">
                      <div className="h-1 bg-indigo-600 rounded-full w-12"></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">3:24 / 15:00</div>
                  </div>
                </div>
                <div>
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between bg-indigo-50 p-3 rounded-lg">
              <div className="flex items-center">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                <span className="ml-2 text-indigo-700 font-medium">Create a sequel?</span>
              </div>
              <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-full">
                Create
              </button>
            </div>

            <div className="flex space-x-3">
              <button 
                className="flex-1 flex items-center justify-center py-2 border border-gray-300 rounded-lg"
                onClick={resetForm}
              >
                <svg className="w-5 h-5 mr-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="text-gray-600">New</span>
              </button>
              <button className="flex-1 flex items-center justify-center py-2 border border-gray-300 rounded-lg">
                <svg className="w-5 h-5 mr-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span className="text-gray-600">Share</span>
              </button>
              <button className="flex-1 flex items-center justify-center py-2 border border-gray-300 rounded-lg">
                <svg className="w-5 h-5 mr-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-gray-600">Save</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto border-t bg-white">
        <div className="flex justify-around py-3">
          <button className="flex flex-col items-center text-indigo-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <span className="text-xs mt-1">Listen</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            <span className="text-xs mt-1">Library</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceCanvasPrototype;
